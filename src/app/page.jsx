import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <main className="mt-8 text-center">
        {/* <div className="relative w-full h-64 mb-6">
          <Image src={hero} alt="Community Engagement" layout="fill" objectFit="cover" className="rounded-md" />
        </div> */}
        <h2 className="text-3xl font-semibold text-gray-800">Welcome to SERVICOM NYSC Portal</h2>
        <p className="text-gray-800 mt-2 max-w-2xl mx-auto">
          As an NYSC member and a part of the community, you have the power to improve your community. Report issues, track their progress, and make a difference today. 
          Our platform ensures that your complaints are heard and addressed efficiently.
        </p>
        <div className="mt-6">
          <Link href="/complaint" className="bg-blue-500 text-white px-4 py-2 rounded shadow-md">Submit a Complaint</Link>
        </div>
        <section className="mt-12 text-left max-w-3xl mx-auto text-gray-800">
          <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <h4 className="font-medium">How do I submit a complaint?</h4>
            <p className="text-gray-600">Click on the 'Submit a Complaint' button and fill out the form with the necessary details.</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <h4 className="font-medium">How can I track my complaint?</h4>
            <p className="text-gray-600">Use the 'Check Status' option in the navigation bar to track the progress of your complaint.</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h4 className="font-medium">Who reviews the complaints?</h4>
            <p className="text-gray-600">SERVICOM officers are responsible for reviewing and addressing complaints submitted through the platform.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
