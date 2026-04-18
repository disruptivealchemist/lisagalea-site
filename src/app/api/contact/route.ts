/**
 * API endpoint to save contact form submissions to Firebase Firestore.
 * Called by the server action after successful email send via Resend.
 */

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate required fields
    if (
      !body.name ||
      !body.email ||
      !body.message ||
      typeof body.name !== "string" ||
      typeof body.email !== "string" ||
      typeof body.message !== "string"
    ) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 },
      );
    }

    // Dynamically import Firebase on the server (requires firebase SDK)
    // This runs in the Edge Runtime node context where Firebase can be initialized
    let db;
    try {
      const { initializeApp, getApps } = await import("firebase/app");
      const { getFirestore, collection, addDoc, serverTimestamp } = await import("firebase/firestore");

      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      };

      // Check if Firebase is already initialized
      const existingApps = getApps();
      const app = existingApps.length > 0 ? existingApps[0] : initializeApp(firebaseConfig);

      db = getFirestore(app);

      // Save to Firestore
      await addDoc(collection(db, "contact_submissions"), {
        name: body.name,
        email: body.email,
        message: body.message,
        interest: body.interest || null,
        createdAt: serverTimestamp(),
      });

      return NextResponse.json(
        { success: true, message: "Contact submission saved" },
        { status: 200 },
      );
    } catch (firebaseError) {
      // Firebase not configured or SDK not available
      console.warn("Firebase storage not available:", firebaseError);
      return NextResponse.json(
        { success: false, message: "Firebase not configured" },
        { status: 200 }, // Return 200 anyway since this is supplementary
      );
    }
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 },
    );
  }
}
