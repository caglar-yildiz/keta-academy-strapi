import type { Schema, Struct } from '@strapi/strapi';

export interface ApiAdmissionScore extends Struct.ComponentSchema {
  collectionName: 'components_api_admission_scores';
  info: {
    displayName: 'admission_score';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ApiResource extends Struct.ComponentSchema {
  collectionName: 'components_api_resources';
  info: {
    displayName: 'resource';
  };
  attributes: {
    score: Schema.Attribute.Component<'api.admission-score', true>;
    video: Schema.Attribute.Component<'api.videos', true>;
  };
}

export interface ApiVideos extends Struct.ComponentSchema {
  collectionName: 'components_api_videos';
  info: {
    displayName: 'videos';
  };
  attributes: {
    href: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_seo_social_medias';
  info: {
    displayName: 'Social Media';
    icon: 'globe';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<
      ['Facebook', 'Twitter', 'Instagram', 'TikTok']
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'text', 'success', 'danger']
    >;
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    textColor: Schema.Attribute.Enumeration<['text-white', 'text-black']>;
    title: Schema.Attribute.String;
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
      'api.admission-score': ApiAdmissionScore;
      'api.resource': ApiResource;
      'api.videos': ApiVideos;
      'seo.seo': SeoSeo;
      'seo.social-media': SeoSocialMedia;
      'shared.answer-option': SharedAnswerOption;
      'shared.cta': SharedCta;
      'shared.icon': SharedIcon;
      'shared.question': SharedQuestion;
      'shared.social-link': SharedSocialLink;
    }
  }
}
