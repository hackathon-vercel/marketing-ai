export const URI_API = "/api/v1.0";
export const URL_API = process.env.NEXT_PUBLIC_BACKEND_API || "";

export const ROUTES = {
  index: "/",
  demoService: "/demoService",
  createBuyer: {
    first: "/createBuyerPerson",
    second: "/createBuyerPerson/stepTwo",
    third: "/createBuyerPerson/stepThree",
  },
};
