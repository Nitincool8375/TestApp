import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">&copy; {new Date().getFullYear()} Your Website. All Rights Reserved.</p>
                <div className="space-x-4">
                    <Link href="/privacypolicy" className="text-blue-400 hover:underline">
                        Privacy Policy
                    </Link>
                    <Link href="/termsconditions" className="text-blue-400 hover:underline">
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </footer>

    );
}