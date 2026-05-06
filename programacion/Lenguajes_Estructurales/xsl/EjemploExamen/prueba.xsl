<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; color: #333; margin: 40px; }
                    h1 { color: #444; border-bottom: 1px solid #ccc; padding-bottom: 10px; }
                    .categoria-box { border: 1px solid #999; padding: 15px; margin-bottom: 20px; }
                    .cat-titulo { font-size: 1.5em; font-weight: bold; margin-bottom: 5px; }
                    .cat-desc { font-style: italic; margin-bottom: 15px; color: #666; }
                    .producto { margin-bottom: 20px; margin-left: 10px; }
                    .prod-nombre { font-weight: bold; font-size: 1.1em; display: flex; align-items: center; }
                    .prod-nombre::before { content: "⚠"; margin-right: 10px; font-size: 1.2em; }
                    .precio { margin-top: 5px; color: #444; }
                    .comentario { margin-left: 20px; font-style: italic; font-size: 0.9em; margin-top: 3px; }
                    .usuario { font-weight: bold; font-style: normal; }
                </style>
            </head>
            <body>
                <h1>Listado de Productos por Categoría</h1>
                
                <xsl:for-each select="catalogo/categoria">
                    <div class="categoria-box">
                        <div class="cat-titulo"><xsl:value-of select="@nombre"/></div>
                        <div class="cat-desc"><xsl:value-of select="descripcion"/></div>
                        
                        <xsl:for-each select="producto">
                            <div class="producto">
                                <div class="prod-nombre"><xsl:value-of select="nombre"/></div>
                                <div class="precio">Precio: <xsl:value-of select="precio"/> EUR</div>
                                
                                <xsl:for-each select="comentarios/comentario">
                                    <div class="comentario">
                                        <span class="usuario"><xsl:value-of select="@usuario"/>:</span>
                                        <xsl:value-of select="."/>
                                    </div>
                                </xsl:for-each>
                            </div>
                        </xsl:for-each>
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>