/**
 * @generated SignedSource<<49db0f5bb2b6cc17f7e07d2a845c4ad6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type Gender = "female" | "male" | "%future added value";
export type UsersByNationalityQuery$variables = {
  nat: string;
  numResults?: number | null | undefined;
};
export type UsersByNationalityQuery$data = {
  readonly users: ReadonlyArray<{
    readonly dob: {
      readonly age: number | null | undefined;
    } | null | undefined;
    readonly gender: Gender | null | undefined;
    readonly location: {
      readonly state: string | null | undefined;
    } | null | undefined;
    readonly name: {
      readonly first: string | null | undefined;
      readonly last: string | null | undefined;
    } | null | undefined;
  } | null | undefined> | null | undefined;
};
export type UsersByNationalityQuery = {
  response: UsersByNationalityQuery$data;
  variables: UsersByNationalityQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "nat"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "numResults"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "nat",
        "variableName": "nat"
      },
      {
        "kind": "Variable",
        "name": "results",
        "variableName": "numResults"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserName",
        "kind": "LinkedField",
        "name": "name",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "first",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "last",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "gender",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserDob",
        "kind": "LinkedField",
        "name": "dob",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "age",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserLocation",
        "kind": "LinkedField",
        "name": "location",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "state",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersByNationalityQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UsersByNationalityQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bff8c4403a8f915b5c382810fda80ddd",
    "id": null,
    "metadata": {},
    "name": "UsersByNationalityQuery",
    "operationKind": "query",
    "text": "query UsersByNationalityQuery(\n  $nat: String!\n  $numResults: Int\n) {\n  users(nat: $nat, results: $numResults) {\n    name {\n      first\n      last\n    }\n    gender\n    dob {\n      age\n    }\n    location {\n      state\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "35c29e29ee27a4e4b3534d9d4d95e9df";

export default node;
