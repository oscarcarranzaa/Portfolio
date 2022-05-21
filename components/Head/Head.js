import Head from "next/head";

export function Headjs({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="Author" content="Oscar Carranza" />
      <meta name="keywords" content="Programador, desarrolladore web" />
      <meta
        name="description"
        content="Bienvenido a mi portfolio donde podrás conocer un poco más de mí"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9647981077416807"
        crossOrigin="anonymous"
      ></script>
    </Head>
  );
}
Headjs.defaultProps = {
  title: "Oscar Carranza",
};
