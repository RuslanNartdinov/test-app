import CoinList from "@/components/CoinList";
import Header from "@/components/Header";
import Auth from "@/components/Auth";

export default function Home() {
  return (
    <main className="w-full h-full flex min-h-screen flex-col items-center justify-between">
		<CoinList/>
		{/*<Auth/>*/}
    </main>
  );
}
