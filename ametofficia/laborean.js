// Example in a Deno module
const config = {
  url: import.meta.env.DATABASE_URL,
  // Other configuration options
};

console.log(config.url); // Outputs the database URL from environment variables
