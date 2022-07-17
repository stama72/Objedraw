//1
var originalUnit = preferences.rulerUnits
preferences.rulerUnits = Units.INCHES

//2
var docRef = app.documents.add(2,4)

// Create a new art layer containing text 
var artLayerRef = docRef.artLayers.add() 
artLayerRef.kind = LayerKind. TEXT

// Set the contents of the text layer.
var textItemRef = artLayerRef.textItem 
textItemRef.contents = "Hello, World"

// Release references 
docRef = null
artLayerRef = null 
textItemRef = null

// Restore original ruler unit setting 
app.preferences.rulerUnits = originalUnit