import { useEffect, useRef } from "react";

export function useDocumentTitle(title: string) {
  const defaultTitle = useRef(document.title);

  // Update title on change
  useEffect(() => {
    document.title = title;
  }, [title]);

  // Reset title on unmount
  useEffect(() => {
    return () => {
      // we disable the exhausting-deps rule because we don't care
      // if the defaultTitle.current changes since page load.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      document.title = defaultTitle.current;
    };
  }, []);
}
