import { CollectionConfig } from "payload";

export const Schedules: CollectionConfig = {
	slug:'Schedules',
	fields:[
		{
			name:'name',
			type:'text'
		},
			{
			name:'it',
			label:'Events Info / Type',
			type:'text'
		},{
			name:'date',
			type:'text',
		},
		{
			name:'cover',
			type:'upload',
			relationTo:'media',
		},
		{
			name:'action_text',
			label:'Action Text',
			type:'text',
		},
		{
			name:'link',
			type:'text',
		}
	]
}