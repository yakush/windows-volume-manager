//#include "uv.h"   // lib uv - must be included before <napi.h> to avoid compile errors!
#include <napi.h>
#include "test.h"

Napi::Object InitAll(Napi::Env env, Napi::Object exports)
{
    //TODO: init all modules
    test1::InitTest1(env, exports);
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, InitAll)