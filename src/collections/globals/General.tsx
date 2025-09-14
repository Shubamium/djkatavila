import { GlobalConfig } from "payload";

export const General:GlobalConfig = {
	slug:'general',
	fields:[
		{
			name:'bio',
			type:'richText'
		},
		{
			name:'intro_vid',
			type:'text',
			label:'Intro Video (YT Video ID)',
			admin:{
				placeholder:'Q9rmgcP-G04'
			}
		},{
			label:'YT Shows (Video ID List)',
			name:'list_vid',
			type:'array',
			fields:[{
				name:'Video ID',
				label:'Video ID',
				type:'text',
			}]
		}
	]
}