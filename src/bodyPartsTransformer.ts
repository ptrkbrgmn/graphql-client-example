export default function toBodyPart(contentListItem) {
  switch (contentListItem.__typename) {
    case "BlockRichText":
      switch (contentListItem.role) {
        case "paragraph":
          return {
            type: "paragraph",
            bodyHtml: contentListItem.text,
          };
      }
    default:
      return null;
  }
}
