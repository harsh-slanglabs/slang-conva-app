import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  EmptyState,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

import { trophyImage } from "../assets";
import SlangLogo from "../assets/SlangLogo.png"

import { ProductsCard } from "../components";

export default function HomePage() {
  const { t } = useTranslation();
  // const client = new isShopifyEmbedded.clients.Rest({session})
  
  return (
    <Page narrowWidth>
      <TitleBar title={"Slang Conva 2.0"} primaryAction={{
        content: "Create Slang Voice Assistant",
        onAction: () => {window.alert("Hello new world!");}
      }} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <EmptyState heading={"Create a Slang Voice Assistant"} action={{
            content: "Create Slang Voice Assistant",
            onAction: () => window.alert("Hello new world!"),
            }}>
              
            <Image
              source={SlangLogo}
              alt={"Slang Labs"}
              width={200}
              />
              <p>
            Allow customers to browse your store using Voice
          </p>
              </EmptyState>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
      </Layout>
      
    </Page>
  );
}
