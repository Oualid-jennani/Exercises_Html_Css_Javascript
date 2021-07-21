<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/clients">
    <html>
      <head>
        <title> Liste des clients </title>
      </head>
      <body>
        <h1> Liste des clients  </h1>
        <table border="1" whidt="800">
          <tr>
            <th>  NOM  </th>
            <th>  PRENOM  </th>
            <th>  TEL  </th>
            <th>  EMAIL  </th>
            <th>  ADRESSE   </th>
          </tr>
          <xsl:for-each select="client">
            <tr>
              <td>
                <xsl:value-of select="nom"/>
              </td>
              <td>
                <xsl:value-of select="prenom"/>
              </td>
              <td>
                <xsl:value-of select="tel"/>
              </td>
              <td>
                <xsl:value-of select="email"/>
              </td>
              <td>
                <xsl:value-of select="adresse"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
        <h1> le nombre de clients est : <xsl:value-of select="count(client)"/></h1>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
