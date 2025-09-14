import { CollectionConfig } from "payload";

export const Mixes: CollectionConfig = {
	slug:'Mixes',
	fields:[
		{
			name:'name',
			type:'text'
		},{
			name:'cover',
			type:'upload',
			relationTo:'media',
		},{
			name:'link',
			type:'text',
		}
	]
}