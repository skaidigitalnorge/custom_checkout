import { getAccessTokenVipps, initiatePaymentVipps } from "../lib/vipps";

function Ragnsan() {
  const onClick = async () => {
    const accessToken = await getAccessTokenVipps();
    console.log(accessToken);
  };

  const handleInitiatePayment = async () => {
    await initiatePaymentVipps();
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
