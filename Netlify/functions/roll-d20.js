exports.handler = async function(event, context) {
  const params = event.queryStringParameters;
  const sides = parseInt(params.sides || "20");

  if (isNaN(sides) || sides < 2 || sides > 100) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Invalid or missing 'sides' parameter. Must be 2–100." })
    };
  }

  const roll = Math.floor(Math.random() * sides) + 1;

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ roll: roll, sides: sides })
  };
};
