import { CollectionConfig } from "payload";

export const Playlist: CollectionConfig = {
	slug:'Playlist',
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