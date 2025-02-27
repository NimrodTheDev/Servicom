
const Page=()=>{
    return (
        <main className="mt-8 max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-semibold text-center">Complaint Details</h2>
            <div className="mt-6 border p-4 rounded bg-gray-50">
            <p className="text-gray-700"><strong>Tracking ID:</strong> {"# 34445"}</p>
            <p className="text-gray-700 mt-2"><strong>Category:</strong> {"Other"}</p>
            <p className="text-gray-700 mt-2"><strong>Submitted On:</strong> {"2012/20/10"}</p>
            <p className="text-gray-700 mt-4"><strong>Description:</strong></p>
            <p className="text-gray-600 bg-white p-3 rounded border">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in ipsam porro illo quibusdam animi dignissimos nulla? Eius cupiditate unde repudiandae omnis saepe dignissimos delectus cumque ut? Sunt, assumenda facere.</p>
            <p className="text-gray-700 mt-4"><strong>Status:</strong> <span className="text-blue-600">{"in progress"}</span></p>
            <p className="text-gray-700 mt-4"><strong>NYSC Response:</strong></p>
            <p className="text-gray-600 bg-white p-3 rounded border">{'No response yet.'}</p>
            </div>
      </main>
    )
}


export default Page