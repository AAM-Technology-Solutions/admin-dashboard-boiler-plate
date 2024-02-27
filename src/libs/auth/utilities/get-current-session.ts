export function getCurrentSession(): any | null {
  const sessionString = localStorage.getItem("session");
  if (sessionString) {
    return JSON.parse(sessionString);
  }
  return null;
}
