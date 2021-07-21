<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
  <html>
        <head> 
        <title> Liste des clients </title>
        </head> 
        <body>
        
          <div style="float:right">
               <h1>ABC <br />0609765434<br />ABC@gmail.com<br />Hay sina3i Oujda </h1>
          </div>
          
          <div>
            <xsl:for-each select="//client">
              <xsl:value-of select="nom"/> <br/>
              <xsl:value-of select="prenom"/> <br/>
              <xsl:value-of select="tel"/> <br/>
              <xsl:value-of select="email"/> <br/>
              <xsl:value-of select="adresse"/> 
              </xsl:for-each>
          </div>
          
          <h1>FACTURE </h1>
          
         <table>
         <xsl:for-each select="//article">
              <tr> 
              <td><xsl:value-of select="libelle"/> </td> 
              <td><xsl:value-of select="quantite"/> </td> 
              <td><xsl:value-of select="prix"/> DH</td> 
              <td>
                    <xsl:if test= "(prix * quantite)>5000"> 
                            <span style="color:red"><xsl:value-of select="prix * quantite " /> DH</span> 
                          <xsl:otherwise>  <span ><xsl:value-of select="prix * quantite " /> DH</span> </xsl:otherwise> 
                    </xsl:if> 
              </td> 
              </tr>
         </xsl:for-each> 
         </table>
        </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
