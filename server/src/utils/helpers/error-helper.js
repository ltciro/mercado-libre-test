import es from "../lang/es.js";

export default (code, req, errorMessage) => {
  //NOTE: This control routes every server error to the same lang key.
  let key = code;
  if (!es[code]) key = "00008";
  const esMessage = es[key];
  console.log(code, esMessage, errorMessage);

  return {
    resultMessage: {
      es: esMessage,
    },
    resultCode: code,
  };
};
