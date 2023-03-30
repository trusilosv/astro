import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";

const md = new MarkdownIt({ html: true });

export default function Content(props) {
  const [content, setContent] = useState (props.content);

  const onCloudCannonLoad = (CloudCannon) => {
    CloudCannon.enableEvents();
    loadNewPropsFromCloudCannon(CloudCannon);
  };

  const loadNewPropsFromCloudCannon = async (CloudCannon) => {
    try {
      const latestValue = await CloudCannon.value({
        keepMarkdownAsHTML: true
      });
      console.log("latestValue ", latestValue)
      console.log("latestValue.body ", latestValue.body)
      setContent(latestValue.body ?? []);
    } catch (fetchError) {
      console.warn("Failed to fetch latest page props", fetchError);
    }
  };

  useEffect(() => {
    const loadListener = (e) => onCloudCannonLoad(e.detail.CloudCannon);
    const updateListener = (e) =>
      loadNewPropsFromCloudCannon(e.detail.CloudCannon);
    document.addEventListener("cloudcannon:load", loadListener);
    document.addEventListener("cloudcannon:update", updateListener);
    if (window.CloudCannon) {
      onCloudCannonLoad(window.CloudCannon);
    }

    return () => {
      document.removeEventListener("cloudcannon:load", loadListener);
      document.removeEventListener("cloudcannon:update", updateListener);
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: md.render(content || "error"),
      }}
    />
  );
}
