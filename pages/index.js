import "../styles/globals.css";
import CollegeTable from "../components/CollegeTable";
import RatingForm from "../components/RatingForm";

export default function Home() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-orange-500">I Hate College</h1>
      <p className="mt-2 text-gray-400">Brutally honest college vibes.</p>

      <CollegeTable />
      <RatingForm />

      <footer className="text-gray-500 text-sm mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} ihatecollege.com
      </footer>
    </div>
  );
}
