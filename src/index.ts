import { GraphQLClient, gql } from "graphql-request";
import transformArticle from "./articleTransformer";

async function main() {
  const endpoint = "XXXX";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      XXX: "xxx",
    },
  });

  const query = gql`
    {
      channel(id: "72bac164-d40d-4cd1-8f3a-9913410784fe") {
        article(id: "2f693ccf-68b1-4cb5-a9cc-5c074b83df64") {
          id
          attributes {
            headline
            content {
              __typename
              ... on BlockImage {
                text: caption
                author
                width: originalWidth
                height: originalHeight
                link {
                  rel
                  href
                }
              }
              ... on BlockFactbox {
                content {
                  ... on BlockRichText {
                    role
                    text
                    formatting {
                      ... on LinkFormatting {
                        href
                        type
                        range {
                          length
                          offset
                        }
                      }
                      ... on StyleFormatting {
                        style
                        range {
                          length
                          offset
                        }
                      }
                    }
                  }
                }
              }
              ... on BlockEmbed {
                id
                url
                provider
                aspectRatio
                renderHint {
                  flags
                }
              }
              ... on BlockRichText {
                renderHint {
                  flags
                }
                text
                role
                formatting {
                  __typename
                  ... on LinkFormatting {
                    href
                    type
                    range {
                      length
                      offset
                    }
                  }
                  ... on StyleFormatting {
                    style
                    range {
                      length
                      offset
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const oneContentResponse = await graphQLClient.request(query);
  const bbmArticle = transformArticle(oneContentResponse.channel.article);
  console.log(JSON.stringify(bbmArticle, undefined, 2));
}
main();
