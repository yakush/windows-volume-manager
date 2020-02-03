#include "test.h"

namespace test1
{

void InitTest1(Napi::Env env, Napi::Object exports)
{
    exports.Set(Napi::String::New(env, "test1"), Napi::Function::New(env, test1));
}

Napi::Value test1(const Napi::CallbackInfo &info)
{
    auto env = info.Env();
    // -- deleted in napi v2.0 ??!!
    // auto scope = Napi::HandleScope(env);

    return Napi::String::New(env, "OK from test!!!");
}

} // namespace test1
