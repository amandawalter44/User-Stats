/**
 * @generated SignedSource<<0eda9c828b69101f7e4830d6827a2266>>
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
};
export type UsersByNationalityQuery$data = {
  readonly users: ReadonlyArray<{
    readonly dob: {
      readonly age: number | null | undefined;
      readonly date: any | null | undefined;
    } | null | undefined;
    readonly gender: Gender | null | undefined;
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
        "kind": "Literal",
        "name": "results",
        "value": 20
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
            "name": "date",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "age",
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
    "cacheID": "e9daee37ab04ed43d2366d4c83ab56b5",
    "id": null,
    "metadata": {},
    "name": "UsersByNationalityQuery",
    "operationKind": "query",
    "text": "query UsersByNationalityQuery(\n  $nat: String!\n) {\n  users(nat: $nat, results: 20) {\n    name {\n      first\n      last\n    }\n    gender\n    dob {\n      date\n      age\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4dbb739e3244403177bd69056acc99d2";

export default node;
