import {ESLintReport} from '../types'

/* eslint-disable */

const reportJSExpected: ESLintReport = [
  {
    suppressedMessages: [],
    fatalErrorCount: 0,
    usedDeprecatedRules: [],
    filePath: "src/form-validation/FormValidatorStrategyFactory.ts",
    messages: [
      {
        "ruleId": "indent",
        "severity": 2,
        "message": "Expected indentation of 6 spaces but found 4.",
        "line": 18,
        "column": 1,
        "nodeType": "Punctuator",
        "messageId": "wrongIndentation",
        "endLine": 18,
        "endColumn": 5,
        "fix": {
          "range": [
            1091,
            1095
          ],
          "text": "      "
        }
      },
      {
        "ruleId": "no-unexpected-multiline",
        "severity": 2,
        "message": "Unexpected newline between object and [ of property access.",
        "line": 18,
        "column": 5,
        "nodeType": "ArrayExpression",
        "messageId": "property"
      },
      {
        "ruleId": "no-sequences",
        "severity": 2,
        "message": "Unexpected use of comma operator.",
        "line": 18,
        "column": 12,
        "nodeType": "SequenceExpression",
        "endLine": 18,
        "endColumn": 13
      }
    ],
    "errorCount": 3,
    "warningCount": 0,
    "fixableErrorCount": 1,
    "fixableWarningCount": 0,
    "source": `import { IFormValidatorStrategy } from './IFormValidatorStrategy'\nimport { DemoComponentValidator } from './strategies/DemoComponentValidator'\nimport { TwitterFeedValidator } from './strategies/TwitterFeedValidator'\nimport { ContactFormValidator } from './strategies/ContactFormValidator'\nimport { AdvancedMediaValidator } from './strategies/AdvancedMediaValidator'\nimport { LiveEventHeadingValidator } from './strategies/LiveEventHeadingValidator'\nimport { PollValidator } from './strategies/PollValidator'\nimport { TvFavoriteNoticeValidator } from './strategies/TvFavoriteNoticeValidator'\nimport { SponsorAdPlacementValidator } from './strategies/SponsorAdPlacementValidator'\nimport { StrikeGamValidator } from './strategies/StrikeGamValidator'\n\nexport class FormValidatorStrategyFactory {\n  private static readonly strategies = new Map<string, IFormValidatorStrategy>([\n    ['demo-component', new DemoComponentValidator()],\n    ['twitter-feed', new TwitterFeedValidator()],\n    ['advanced-media', new AdvancedMediaValidator()],\n    ['live-event-heading', new LiveEventHeadingValidator()]\n    ['poll', new PollValidator()],\n    ['tv-favorite-notice', new TvFavoriteNoticeValidator()],\n    ['sponsor-ad-placement', new SponsorAdPlacementValidator()],\n    ['contact-form', new ContactFormValidator()],\n    ['strike-gam', new StrikeGamValidator()]\n  ])\n\n  public static build(\n    componentName: string\n  ): IFormValidatorStrategy | undefined {\n    return this.strategies.get(componentName)\n  }\n}\n`
  }]

/* eslint-enable */

export default reportJSExpected
