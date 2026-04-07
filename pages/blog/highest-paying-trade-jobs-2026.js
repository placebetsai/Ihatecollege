import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Redirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/blog/highest-paying-trade-jobs"); }, [router]);
  return null;
}
