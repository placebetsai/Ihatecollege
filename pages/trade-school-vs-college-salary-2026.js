import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Redirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/trade-school-vs-college-salary-2025"); }, [router]);
  return null;
}
