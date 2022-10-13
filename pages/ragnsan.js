import { getAccessToken, initiatePayment } from "../lib/vipps";

function Ragnsan() {
  const onClick = async () => {
    const accessToken = await getAccessToken();
    console.log(accessToken);
  };

  const handleInitiatePayment = async () => {
    await initiatePayment();
  };

  return (
    <>
      <button onClick={onClick}>getAccessToken</button>
      <div className="my-24"></div>
      <button onClick={handleInitiatePayment}>initiatePayment</button>
    </>
  );
}
export default Ragnsan;
