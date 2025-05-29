import { SignedIn, SignedOut, SignInButton, UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <>
      <SignedIn>
        <UserProfile />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" />
        <p>Please sign in to view your profile.</p>
      </SignedOut>
    </>
  );
}