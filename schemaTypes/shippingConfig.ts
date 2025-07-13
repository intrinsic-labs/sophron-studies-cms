import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'shippingConfig',
  title: 'Shipping Configuration',
  type: 'document',
  icon: () => '📦',
  fields: [
    defineField({
      name: 'title',
      title: 'Configuration Name',
      type: 'string',
      initialValue: 'Default Shipping Configuration',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'businessInfo',
      title: 'Business Information',
      type: 'object',
      fields: [
        defineField({
          name: 'businessName',
          title: 'Business Name',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'contactName',
          title: 'Contact Person Name',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'email',
          title: 'Contact Email',
          type: 'string',
          validation: Rule => Rule.required().email()
        })
      ]
    }),
    defineField({
      name: 'fromAddress',
      title: 'Shipping From Address',
      type: 'object',
      fields: [
        defineField({
          name: 'streetAddress',
          title: 'Street Address',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'addressLine2',
          title: 'Address Line 2 (Optional)',
          type: 'string'
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'state',
          title: 'State',
          type: 'string',
          validation: Rule => Rule.required().min(2).max(2).uppercase()
        }),
        defineField({
          name: 'zipCode',
          title: 'ZIP Code',
          type: 'string',
          validation: Rule => Rule.required().regex(/^\d{5}(-\d{4})?$/, {
            name: 'zipCode',
            invert: false
          })
        })
      ]
    }),
    defineField({
      name: 'shippingSettings',
      title: 'Shipping Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'enabledServices',
          title: 'Enabled Shipping Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'service',
                  title: 'Service',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'USPS Ground Advantage', value: 'GROUND_ADVANTAGE'},
                      {title: 'Priority Mail', value: 'PRIORITY'},
                      {title: 'Priority Mail Express', value: 'PRIORITY_EXPRESS'}
                    ]
                  },
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'enabled',
                  title: 'Enabled',
                  type: 'boolean',
                  initialValue: true
                }),
                defineField({
                  name: 'markupPercentage',
                  title: 'Markup Percentage (Optional)',
                  type: 'number',
                  description: 'Additional percentage to add to USPS calculated price',
                  validation: Rule => Rule.min(0).max(100)
                })
              ],
              preview: {
                select: {
                  service: 'service',
                  enabled: 'enabled',
                  markup: 'markupPercentage'
                },
                prepare({service, enabled, markup}) {
                  const serviceNames = {
                    'GROUND_ADVANTAGE': 'USPS Ground Advantage',
                    'PRIORITY': 'Priority Mail',
                    'PRIORITY_EXPRESS': 'Priority Mail Express'
                  }
                  const status = enabled ? '✅' : '❌'
                  const markupText = markup ? ` (+${markup}%)` : ''
                  return {
                    title: `${status} ${serviceNames[service]}${markupText}`
                  }
                }
              }
            }
          ],
          initialValue: [
            {service: 'GROUND_ADVANTAGE', enabled: true},
            {service: 'PRIORITY', enabled: true},
            {service: 'PRIORITY_EXPRESS', enabled: true}
          ]
        }),
        defineField({
          name: 'packageDefaults',
          title: 'Package Defaults',
          type: 'object',
          fields: [
            defineField({
              name: 'weight',
              title: 'Default Weight (lbs)',
              type: 'number',
              description: 'Default weight for paperback books',
              initialValue: 1,
              validation: Rule => Rule.required().min(0.1).max(70)
            }),
            defineField({
              name: 'dimensions',
              title: 'Default Dimensions (inches)',
              type: 'object',
              fields: [
                defineField({
                  name: 'length',
                  title: 'Length',
                  type: 'number',
                  initialValue: 9,
                  validation: Rule => Rule.required().min(1)
                }),
                defineField({
                  name: 'width',
                  title: 'Width',
                  type: 'number',
                  initialValue: 6,
                  validation: Rule => Rule.required().min(1)
                }),
                defineField({
                  name: 'height',
                  title: 'Height',
                  type: 'number',
                  initialValue: 1,
                  validation: Rule => Rule.required().min(1)
                })
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'notifications',
      title: 'Email Notifications',
      type: 'object',
      fields: [
        defineField({
          name: 'labelNotificationEmail',
          title: 'Label Notification Email',
          description: 'Email address to send shipping labels to for fulfillment',
          type: 'string',
          validation: Rule => Rule.required().email()
        }),
        defineField({
          name: 'fromEmailName',
          title: 'From Email Name',
          description: 'Name to use in customer notification emails',
          type: 'string',
          initialValue: 'Sophron Studies',
          validation: Rule => Rule.required()
        })
      ]
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active Configuration',
      type: 'boolean',
      description: 'Only one configuration should be active at a time',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'title',
      businessName: 'businessInfo.businessName',
      isActive: 'isActive'
    },
    prepare({title, businessName, isActive}) {
      return {
        title: `${isActive ? '🟢' : '🔴'} ${title}`,
        subtitle: businessName
      }
    }
  }
}) 