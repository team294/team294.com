export default function mediaUrl(url: string) {
  if (url && url !== "/media/other/blank.png" && !url.includes("/media")) {
    const parts = url.split("/");
    const dynamicBasePath = parts.slice(3, 4).join("/");
    const mediaPath = `${dynamicBasePath}/public/media/`;
    return url.replace(`${dynamicBasePath}/`, mediaPath);
  } else return url;
}
