export default function senderName({ username, firstName, lastName }) {
  return firstName && lastName
    ? `${firstName} ${lastName}`
    : username;
}
