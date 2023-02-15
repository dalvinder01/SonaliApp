export const token =
 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJiNDg4ZjkzZC0xOThmLTQ4NWEtOGU3My1kZTgwNjIwNGE4MTUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3NTIyNzUyNCwiZXhwIjoxNzA2NzYzNTI0fQ.utDO0Ic1DsNJm5qKiRV1hsBkMg26EWxt7gRST0OP3IQ';
// API call to create meeting
const API_BASE_URL = 'https://api.videosdk.live/v2';

export const createMeeting = async () => {
 const url = `${API_BASE_URL}/rooms`;
 const options = {
  method: 'POST',
  headers: {Authorization: token, 'Content-Type': 'application/json'},
 };

 const {roomId} = await fetch(url, options)
  .then(response => response.json())
  .catch(error => console.error('error', error));

 return roomId;
};
export const validateMeeting = async roomId => {
 // const roomId = "25bb-22xf-ca4c";
 console.warn('id on api', roomId);
 const url = `${API_BASE_URL}/rooms/validate/${roomId}`;
 const options = {
  method: 'GET',
  headers: {Authorization: token},
 };

 const result = await fetch(url, options)
  .then(response => response.json()) //result will have meeting id
  .catch(error => console.error('error', error));
 return result;
};

export const getStreamUrl = async roomId => {
 console.warn('id on api', roomId);
 const options = {
  method: 'POST',
  headers: {Authorization: token, 'Content-Type': 'application/json'},
  body: JSON.stringify({roomId: roomId}),
 };
 const url = `https://api.videosdk.live/v2/hls/start`;
 const response = await fetch(url, options)
  .then(response => response.json()) //result will have meeting id
  .catch(error => console.error('error', error));
 return response;
};
