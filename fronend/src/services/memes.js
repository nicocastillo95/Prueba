const url = "https://api.imgflip.com/get_memes" //localHost:8080/Post

export async function getMemesByPopular() {
  const response = await fetch(`${url}`);
  const responseJson = await response.json();
  return responseJson;
}

export async function getMemesBySearch(q) {

}

export default {
  getMemesByPopular,
};