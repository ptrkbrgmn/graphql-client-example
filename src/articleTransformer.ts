import toBodyPart from "./bodyPartsTransformer";

export default function transform(oneContentArticle) {
  return {
    type: "article",
    id: oneContentArticle.id,
    url:
      "/strategi/hallbarhetsarbete/lista-atta-digitala-verktyg-som-lyfter-hallbarhetsarbetet-till-nya-nivaer/",
    articleTypes: ["longread"],
    sectionPath: [
      {
        id: "aktuellhallbarhet.contentful.7sTughHrArUSZiQRayf267",
        name: "Hållbarhetsarbete",
        url: "/hallbarhetsarbete/",
        metaDescription: "",
        pageTitle: "",
        description: null,
      },
    ],
    headlineHtml: oneContentArticle.attributes.headline,
    topParts: [],
    leadHtml: "",
    publicationTime: oneContentArticle.attributes.firstPublishTime,
    updateTime: oneContentArticle.attributes.lastPublishTime,
    bodyParts: oneContentArticle.attributes.content
      .map((contentListItem) => toBodyPart(contentListItem))
      .filter(function (el) {
        return el != null;
      }),
    tags: [],
    bylines: [
      {
        id: "aktuellhallbarhet.contentful.8S2MaO12Iq2CW1BVwq0hb",
        name: "Sten Sjögren",
        email: null,
        image: {
          url:
            "https://cached-images.bonnier.news/ctf/8zsoy6orjtri/1nxi21uXTWtXDLLObPmh3k/03824a9b37caab2ca1b1864ee41390a6/Logo_AH_symbol-RGB.jpg",
          height: 1705,
          width: 1707,
        },
        title: "Reporter",
      },
    ],
    dropHead: "",
    seoTitle:
      "Lista: Åtta digitala verktyg som lyfter hållbarhetsarbetet till nya nivåer",
    seoDescription:
      "En digital revolution pågår i företagens arbete med hållbarhet. Smarta verktyg förenklar hanteringen av växande datamängder och gör det lättare att få koll på leverantörerna. Läs Aktuell Hållbarhets genomgång av aktuella digitala verktyg för ett effektivt hållbarhetsarbete. (Artikeln är uppdaterad)",
    accessRestriction: "locked",
  };
}
