import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAnswerOption extends Struct.ComponentSchema {
  collectionName: 'components_shared_answer_options';
  info: {
    displayName: 'AnswerOption';
    icon: 'check';
  };
  attributes: {
    isCorrect: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    order: Schema.Attribute.Integer;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      [
        'math',
        'physics',
        'chemistry',
        'biology',
        'science',
        'coding',
        'programming',
        'literature',
        'english',
        'history',
        'geography',
        'art',
        'music',
        'health',
        'social',
        'technology',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedQuestion extends Struct.ComponentSchema {
  collectionName: 'components_shared_questions';
  info: {
    displayName: 'Question';
    icon: 'question';
  };
  attributes: {
    explanation: Schema.Attribute.Blocks;
    options: Schema.Attribute.Component<'shared.answer-option', true>;
    order: Schema.Attribute.Integer;
    text: Schema.Attribute.Blocks;
    type: Schema.Attribute.Enumeration<['multipleChoice', 'trueFalse']> &
      Schema.Attribute.Required;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'SocialLink';
    icon: 'link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<['instagram', 'youtube', 'tiktok']>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.answer-option': SharedAnswerOption;
      'shared.icon': SharedIcon;
      'shared.question': SharedQuestion;
      'shared.social-link': SharedSocialLink;
    }
  }
}
