import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Redirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/is-college-worth-it-2025"); }, [router]);
  return null;
}
