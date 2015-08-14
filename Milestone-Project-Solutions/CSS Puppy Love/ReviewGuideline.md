### CSS Project Review
	Spend 15min with student and review

Visual
	
	Compare between Image and Site
	
	Look at proportions and colors are exact
		Padding between nav text and lines
		No stair-stepping text
		Text should never touch a boundary (Line, Border, edge, etc)
	
	Gutters should look nice 
	
	
HTML Structure
	Import normalize from Nicolas 
	Use Double container pattern For hero section and lower content section)
	
	Hero Section
		arbitrary div (should have height)
		
		Header 	
		
			Option 1
				header (logo, search, button) (Set height)
				nav (a)
			Option 2
				header (logo, search, button, nav) (Set header height)
					All children are absolute pos.
	
		Intro Section
				
			
	
	In lower content section
		Need section for three boxes
		Need section for Primary Content Section (<main>)
			
	
	Abstract panel top/bottom
	
	Great People, Better Dogs ... 
		1. use strong or em to emphasize words for p
		2. use span to deemphasize words on hx
		
	Three boxes
		Use common class for all three
		Use specific class for each color et.
	
CSS
	
	
	
	Pull in normalize.css to reset
	
	Defaults
		define h1, a, buttons, p
		
	Classnames
		Semantic names
		utility names
		Avoid Aesthetics, Location, Content in names
	
 	top-nav pattern 1
 		absolute pos the elements
 		MUST set height on it's parent
 		
 		
 	Large clickable area for links
 		show padding on anchor	
 		
 	How was the gap between three boxes and lower elements achieved
 		
 	Organization
 		Separate Layout/Scaffolding from Components
 		Work from out to in
 		Have container followed by children
 		
 		Components
 			Start general and then define details (.tile is before .tile button)
 			Avoid baggage on component (margin, position:absolute)
 			
 			
Best Practices
	Separate concerns between layout and components
 	Organizations (Reset, Default, Layout, Components)
 	Components should be able to live outside of where they live (Avoid margins, and positions)
 	prefer background-image over img tag		
 		
	
Common Mistakes
	spacing
	
	Design
		No Shadows around Three boxes
		Gaps around nav
		Inputs devolving to default properties (Buttons not having radius, strange borders)
		Text touching boundary
	HTML
		Two links to google fonts	
		Strange Comment strategy
		inconsistent naming (camelcase vs hyphen case)
		a inside a button or vise vera
		prefer button over <input type button>
	CSS		
		tag selector as first item in component sections (Should the the component class name)
		Component parts split apart from one another
	
	Items in Hero section used as Components (Don't split up rules on hero components)
	
	
	
	
