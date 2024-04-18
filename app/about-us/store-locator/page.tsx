export default function StoreLocator() {
    return <div className="text-white">
     <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Store Locator</h1>
      <div className="bg-black p-6 rounded-lg shadow-md">
        {/* Address display */}
        <div className="mt-4">
          <p className="text-lg font-semibold text-white">Address:</p>
          <p className="text-white">New Delhi, Block 26, Near Police Station, Pincode: 801108</p>
        </div>
      </div>
    </div>
    </div>;
  }