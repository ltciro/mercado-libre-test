import es from "../lang/es.js";

export default (code, req, errorMessage) => {
  //NOTE: This control routes every server error to the same lang key.
  let key = code;
  if (!es[code]) key = "00008";
  const esMessage = es[key];
  if (esMessage.includes("internal error")) {
    console.log(code, errorMessage, "Server Error", req);
  } else {
    console.log(code, errorMessage ?? esMessage, "Client Error", req);
  }

  return {
    resultMessage: {
      es: esMessage,
    },
    resultCode: code,
  };
};
