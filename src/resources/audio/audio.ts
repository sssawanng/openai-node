// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'openai/resource';
import * as SpeechAPI from 'openai/resources/audio/speech';
import * as TranscriptionsAPI from 'openai/resources/audio/transcriptions';
import * as TranslationsAPI from 'openai/resources/audio/translations';

export class Audio extends APIResource {
  transcriptions: TranscriptionsAPI.Transcriptions = new TranscriptionsAPI.Transcriptions(this.client);
  translations: TranslationsAPI.Translations = new TranslationsAPI.Translations(this.client);
  speech: SpeechAPI.Speech = new SpeechAPI.Speech(this.client);
}

export namespace Audio {
  export import Transcriptions = TranscriptionsAPI.Transcriptions;
  export import Transcription = TranscriptionsAPI.Transcription;
  export import TranscriptionCreateParams = TranscriptionsAPI.TranscriptionCreateParams;
  export import Translations = TranslationsAPI.Translations;
  export import Translation = TranslationsAPI.Translation;
  export import TranslationCreateParams = TranslationsAPI.TranslationCreateParams;
  export import Speech = SpeechAPI.Speech;
  export import SpeechCreateParams = SpeechAPI.SpeechCreateParams;
}
