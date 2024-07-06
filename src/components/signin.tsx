import prime from "../assets/images/logo.png";

const SignIn = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={prime} className="w-50 m-4" />
      <div className="p-6 border border-gray-300 rounded-lg">
        <h1 className="text-2xl font-medium">Sign in</h1>
        <label className="font-semibold">Email or Phone number</label>
        <input
          type="text"
          className="bg-gray-50 mt-4 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
          required
        />
        <button className="bg-yellow-300 h-9 w-80 hover:bg-yellow-500 text-black py-2 px-4 rounded-sm mt-4">
          Continue
        </button>

        <h1 className="text-sm mt-4 w-80">
          some random text for testing the app and developing the app in a{" "}
          <br />
          correct way
        </h1>
        <h1 className="mt-4">- Need help?</h1>
      </div>
      <h1 className="text-center text-gray-400 text-sm mt-4">New to amazon?</h1>
      <button
        className="border border-gray-400
       p-1 rounded-lg w-96 mt-4 shadow-lg hover:shadow-xl"
      >
        {" "}
        Create your amazon account
      </button>
    </div>
  );
};

export default SignIn;
