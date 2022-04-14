import * as React from "react"
// styles
const pageStyles = {
  color: "#FA8072",
  padding: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  color: "#8B008B",
}
const headingAccentStyles = {
  color: "#C71585",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#00FF7F",
  padding: 4,
  backgroundColor: "#DB7093",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 700,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 20,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 50,
}

const descriptionStyle = {
  color: "#DC143C",
  fontSize: 22,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "As vezes, as pessoas cometem o erro de tentar nunca mais pensar no fracasso. A verdade é que podemos aprender muito mais com os erros cometidos!",
  color: "#8954A8",

}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#623812",
  border: "1px solid #077413",
  fontSize: 50,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 8,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 20,
  lineHeight: 5,
}

// data
const links = [
  {
    text: "Versículo Bíblico",
    description:
      "Eu, o Senhor, examino os pensamentos e ponho à prova os corações. Eu trato cada pessoa conforme a sua maneira de viver, de acordo com o que ela faz. - Jeremias 17:10 NTLH",
    color: "#BC8F8F",
    fontSize: 100,
  },
  {
    text: "Quais são as motivações que direcionam suas decisões?",
    description:
      "Essa auto avaliação precisa ser diária! Lamentar pelos erros nos paralisa, mas quando enxergamos as intenções do nossos corações à luz da palavra de Deus, encontramos o caminho certo para a verdadeira mudança!",
    color: "#BC8F8F",
  },
  {
    text: "Lembrete",
    description:
      "O amor que você dá aos outros nunca deve depender do que você recebe de volta, mas deve ser fruto de conhecer o Deus que amou primeiro!",
    color: "#BC8F8F",
  },
  {
    text: "Versículo Bíblico",
    description:
      "Portanto, eu digo, os muitos pecados dela lhe foram perdoados; pois ela amou muito. Mas aquele a quem pouco foi perdoado, pouco ama.- Lucas 7:47 NVI",
    color: "#BC8F8F",
  },
  {
    text: "Plugin Library",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#BC8F8F",
  },
  {
    text: "Build and Host",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#BC8F8F",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Fehminina
        <br />
        <span style={headingAccentStyles}> Fé e Feminilidade! 🌹
        <br></br>
Psicopedagogiando na maternidade!📚🧠🌻</span>
        <>
        </>
      </h1>
      <p style={paragraphStyles}>
        <code style={codeStyles}>Encontramos a essência da feminilidade em nosso criador! Ele é perfeito, ele não erra!</code>
        <span role="img" aria-label="Raising Hands smiley emoji">🙌
          
        </span>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
