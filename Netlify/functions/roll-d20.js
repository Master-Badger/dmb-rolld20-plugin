exports.handler = async function(event, context) {
  const roll = Math.floor(Math.random() * 20) + 1;
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ roll: roll })
  };
};
