// import { getAccessTokenVipps, initiatePaymentVipps } from "../lib/vipps";
import { getAuthVipps, initiatePaymentVipps } from "../lib/vipps";

function Ragnsan() {
  const onClick = async () => {
    getAuthVipps();
  };

  const handleInitiatePayment = async () => {
    await initiatePaymentVipps("99164412", 3200, "321321").then((response) => {
      window.open(response.url, "_blank");
    });
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
